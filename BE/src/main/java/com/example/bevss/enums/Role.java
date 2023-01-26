package com.example.bevss.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Role {
    ADMIN,
    GUEST;

    Role() {
    }

    @JsonValue
    public int toValue() {
        return this.ordinal();
    }
}
