package com.queuein.queueinbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "queueUser") //user is reserved in mysql, therefore I am use queueUser instead
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private Boolean isQueueOwner;
    private String name;
    @ManyToOne
    @JoinColumn(name = "queue_id")
    private Queue queue;
    private int position;

    public User( Boolean isQueueOwner, String name, Queue queue,int position) {
        this.isQueueOwner = isQueueOwner;
        this.name = name;
        this.queue = queue;
        this.position = position;
    }

    public User() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getQueueOwner() {
        return isQueueOwner;
    }

    public void setQueueOwner(Boolean queueOwner) {
        isQueueOwner = queueOwner;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
