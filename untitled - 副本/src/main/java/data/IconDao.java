package data;

import java.util.List;

import data.model.IconEntity;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IconDao {

    public abstract void _test();

    public abstract void createCollection();

    public abstract List<IconEntity> findList(int skip, int limit);

    public abstract IconEntity findOne(String id);

    public abstract void insert(IconEntity entity);

    public abstract void update(IconEntity entity);

}