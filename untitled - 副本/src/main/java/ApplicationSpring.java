import java.util.List;

import data.IconDao;
import data.impl.IconDaoImpl;
import data.model.IconEntity;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ApplicationSpring {

    public static void main(String[] args) {

        System.out.println("Bootstrapping HelloMongo");

        ConfigurableApplicationContext context = null;
        context = new ClassPathXmlApplicationContext("mongo.xml");

        IconDao iconDao = context.getBean(IconDaoImpl.class);
        iconDao._test();

        iconDao.createCollection();

        List<IconEntity> list = iconDao.findList(0, 10);
        for (IconEntity e : list) {
            System.out.println(e);
            System.out.println("all - id=" + e.getId() + ", icon=" + e.getIcon());
        }

        IconEntity e = iconDao.findOne("5");
        System.out.println(e);
        System.out.println("all - id=" + e.getId() + ", icon=" + e.getIcon());

        System.out.println("DONE!");
    }

}  