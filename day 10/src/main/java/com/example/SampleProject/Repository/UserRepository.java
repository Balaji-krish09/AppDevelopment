package com.example.SampleProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SampleProject.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}