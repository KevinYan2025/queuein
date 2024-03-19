package com.queuein.queueinbackend.model;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.LinkedList;
import java.util.List;



@Entity
@Table(name = "queue")
public class Queue {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "random_id_generator")
    @GenericGenerator(name = "random_id_generator", strategy = "com.queuein.queueinbackend.model.RandomIdGenerator") //using custom generator to generate 6 digits id
    private Integer id;
    @OneToMany(mappedBy = "queue", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<User> users = new LinkedList<User>();


    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(LinkedList<User> users) {
        this.users = users;
    }
}
