package com.edubridge.backend.dto;

import com.edubridge.backend.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthResponse {
    private User user;
    private String token;
}
