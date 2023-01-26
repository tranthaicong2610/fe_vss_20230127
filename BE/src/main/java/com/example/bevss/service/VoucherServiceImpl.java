package com.example.bevss.service;

import com.example.bevss.entity.VoucherEntity;
import com.example.bevss.repository.VoucherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoucherServiceImpl implements VoucherService{

    @Autowired
    private VoucherRepository voucherRepository;

    @Override
    public VoucherEntity createVoucher(VoucherEntity voucherEntity) {
        if (voucherEntity != null){
            return voucherRepository.save(voucherEntity);
        }
        return null;
    }
}
