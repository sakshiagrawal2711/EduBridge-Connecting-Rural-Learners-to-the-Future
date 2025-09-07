package com.edubridge.backend.controller;

import com.edubridge.backend.model.Role;
import com.edubridge.backend.model.User;
import com.edubridge.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    // ✅ Register
    @PostMapping("/register")
    public User register(@RequestParam String username,
                         @RequestParam String email,
                         @RequestParam String password,
                         @RequestParam Role role) {
        return userService.registerUser(username, email, password, role);
    }

    // ✅ Login
    @PostMapping("/login")
    public User login(@RequestParam String email,
                      @RequestParam String password) {
        return userService.loginUser(email, password);
    }
}
