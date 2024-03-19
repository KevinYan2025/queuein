package com.queuein.queueinbackend.controller;

import com.queuein.queueinbackend.model.Queue;
import com.queuein.queueinbackend.model.QueueRepository;
import com.queuein.queueinbackend.model.User;
import com.queuein.queueinbackend.model.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiController {
    private final QueueRepository queueRepository;
    private final UserRepository userRepository;

    public ApiController(QueueRepository queueRepository, UserRepository userRepository) {
        this.queueRepository = queueRepository;
        this.userRepository = userRepository;
    }

    @PostMapping(path ="/createUser")
    public User createUser(@RequestBody String name) {
        Queue queue = queueRepository.findById(533297).orElse(queueRepository.save(new Queue()));
        User user = new User(false,name,queue,1);
        return userRepository.save(user);
    }
    @GetMapping(path = "/getUsers")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping(path ="/createQueue")
    public Queue createUser() {
        Queue queue = new Queue();
        return queueRepository.save(queue);
    }
}
