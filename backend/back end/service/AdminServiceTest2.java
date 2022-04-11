package com.te.carwalapro.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.te.carwalapro.dao.AdminDao;
import com.te.carwalapro.dao.CarDetailsDao;
import com.te.carwalapro.dto.Admin;
import com.te.carwalapro.dto.CarDetails;
import com.te.carwalapro.dto.MyAdminDetails;
@ExtendWith(MockitoExtension.class)
class AdminServiceTest2 {
	
	@Mock
	private AdminDao adminDao;
	
	@Mock
	private CarDetails carDetails;

	@InjectMocks
	private AdminServiceImpl adminServiceImpl;
	

	
	
	@Test
	void testRegData() {
		fail("Not yet implemented");
	}

	@Test
	void testGetData() {
		fail("Not yet implemented");
	}

	@Test
	void testLoginData() {
		fail("Not yet implemented");
	}

	@Test
	void testLoadUserByUsername() {
		Admin admin = new Admin();
		admin.setAdminId(1);
		admin.setAdminUserName("anu");
		admin.setAdminPassword("qwerty");
		admin.setRole("ROLE_ADMIN");
		when(adminDao.findByAdminUserName("anu")).thenReturn(admin);
		MyAdminDetails loadDetails = adminServiceImpl.loadUserByUsername("anu");
		assertEquals("anu", loadDetails.getUsername());
	}

	@Test
	void testGetData1() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAdminId() {
		fail("Not yet implemented");
	}

}
