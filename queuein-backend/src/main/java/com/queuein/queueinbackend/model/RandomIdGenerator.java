package com.queuein.queueinbackend.model;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;
import java.util.Random;

public class RandomIdGenerator implements IdentifierGenerator {

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
        Random random = new Random();
        Integer min = 100000; // Minimum 6-digit number
        Integer max = 999999; // Maximum 6-digit number
        Integer generatedId = random.nextInt(max - min + 1) + min;
        return generatedId;
    }
}