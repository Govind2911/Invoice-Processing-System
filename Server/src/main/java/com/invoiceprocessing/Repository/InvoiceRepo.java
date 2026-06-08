package com.invoiceprocessing.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.invoiceprocessing.entity.Invoice;

public interface InvoiceRepo extends JpaRepository<Invoice , Long>{
    
}
