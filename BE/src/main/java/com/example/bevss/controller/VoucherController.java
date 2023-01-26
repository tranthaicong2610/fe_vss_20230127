package com.example.bevss.controller;

import com.example.bevss.entity.VoucherEntity;
import com.example.bevss.service.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/voucher")
public class VoucherController {

    @Autowired
    private VoucherService voucherService;

    @PostMapping("/")
    VoucherEntity createProduct(@RequestBody VoucherEntity voucherEntity){
        return voucherService.createVoucher(voucherEntity);
    }
}
