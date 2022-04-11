package com.te.carwalapro.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import com.te.carwalapro.dao.CarDetailsDao;
import com.te.carwalapro.dto.CarDetails;

class CardetailsServiceTest2 {

	
	@Mock
	CarDetailsDao carDetailsDao;
	
	@Mock
	CardetailsServiceImpl cardetailsServiceImpl;
	
	@Test
	void testInsertData() {
		CarDetails carDetails=new CarDetails();
		carDetails.setCompanyName("as");
		carDetails.setGearType("sdf");
		when(carDetailsDao.save(carDetails)).thenReturn(carDetails);
		boolean carDetails2=( cardetailsServiceImpl.insertData(carDetails));
		assertEquals("as", carDetails2);
	}

	@Test
	void testRemoveData() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdateData() {
		CarDetails carDetails=new CarDetails();
		carDetails.setFuelType("petrol");
		carDetails.setOnroadPrice(56785678.87);
		when(carDetailsDao.save(carDetails)).thenReturn(carDetails);
		boolean details=cardetailsServiceImpl.updateData(carDetails);
		assertEquals(false, details);
	}

	@Test
	void testGetData2String() {
		fail("Not yet implemented");
	}

	@Test
	void testGetData1() {
		fail("Not yet implemented");
	}

	@Test
	void testGetData2Int() {
		fail("Not yet implemented");
	}

	@Test
	void testGetData3() {
		fail("Not yet implemented");
	}

	@Test
	void testGetCars() {
		fail("Not yet implemented");
	}

}
