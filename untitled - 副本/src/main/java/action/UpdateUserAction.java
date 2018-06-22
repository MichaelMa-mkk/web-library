package action;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import data.IconDao;
import data.impl.IconDaoImpl;
import data.model.IconEntity;
import model.Order;
import model.OrderItem;
import model.User;
import org.hibernate.Hibernate;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import service.AppService;

import java.util.HashSet;
import java.util.Set;

public class UpdateUserAction extends ActionSupport{
    private int id;

    private String pwd;
    private String icon;
    private String phone;
    private String email;
    private String name;
    private Set<Order> orders = new HashSet<>();
    private Set<Order> cart;

    public Set<Order> getCart() {
        return cart;
    }

    public void setCart(Set<Order> cart) {
        this.cart = cart;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private void setUserInfo(User item) {
        setName(item.getName());
        setEmail(item.getEmail());
        setPhone(item.getPhone());
        setId(item.getId());
    }

    private AppService appService;

    public void setAppService(AppService appService) {
        this.appService = appService;
    }

    public String query() throws Exception {
        User result = appService.getUserById(id);
        if (result != null) {
            setUserInfo(result);
            Hibernate.initialize(result.getOrders());
            if (ActionContext.getContext().getSession().get("cart") == null) return "error";
            setCart((Set<Order>) ActionContext.getContext().getSession().get("cart"));
            setOrders(result.getOrders());

            ConfigurableApplicationContext context = null;
            context = new ClassPathXmlApplicationContext("mongo.xml");
            IconDao iconDao = context.getBean(IconDaoImpl.class);
            iconDao.createCollection();
            IconEntity e = iconDao.findOne("" + id);
            if (e == null) {
                e = new IconEntity();
                e.setId("" + id);
                iconDao.insert(e);
                iconDao.update(e);
            }
            setIcon(e.getIcon());
            return "success";
        }
        return "error";
    }

    public String update() throws Exception {
        User result = appService.getUserById(id);
        if (result != null) {
            result.setName(name);
            result.setEmail(email);
            result.setPhone(phone);
            appService.updateUser(result);
            return "success";
        }
        return "error";
    }

    public String queryOrder() throws Exception {
        User result = appService.getUserById(id);
        if (result != null) {
            Hibernate.initialize(result.getOrders());
            Set<Order> orders = result.getOrders();
            for (Order order : orders) {
                Set<OrderItem> items = order.getItems();
                for (OrderItem orderitem : items) {
                    orderitem.setBook(appService.getBookById(orderitem.getBookid()));
                }
            }
            setOrders(orders);
            return "success";
        }
        return "error";
    }

    public String updateIcon() throws Exception {
        User result = appService.getUserById(id);
        if (result != null) {
            ConfigurableApplicationContext context = null;
            context = new ClassPathXmlApplicationContext("mongo.xml");
            IconDao iconDao = context.getBean(IconDaoImpl.class);
            iconDao.createCollection();
            IconEntity e = iconDao.findOne("" + id);
            if (e == null) {
                setIcon(null);
                return "error";
            }
            e.setIcon(icon);
            iconDao.update(e);
            return "success";
        }
        setIcon(null);
        return "error";
    }
}
