package com.te.carwalapro.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.UnsupportedEncodingException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.te.carwalapro.dto.CarDetails;
import com.te.carwalapro.service.AdminService;
import com.te.carwalapro.service.CardetailsService;


@ExtendWith(MockitoExtension.class)
@SpringBootTest
class CarControllerTest {

	@MockBean
	private  CardetailsService service;
	
	private MockMvc mvc;
	
	@Autowired
	private WebApplicationContext context;
	
	@MockBean
private	AdminService detailsService;
	
	private ObjectMapper mapper=new ObjectMapper();
	
	@BeforeEach
	void setUp() throws Exception {
		mvc = MockMvcBuilders.webAppContextSetup(context).build();
	}
	
	
	@Test
	void testInsertData() throws JsonProcessingException, UnsupportedEncodingException, Exception {
		System.out.println("hiiiiii====>");
		MockHttpServletRequest request = new MockHttpServletRequest();
		request.addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdWdhdmVuaSIsImV4cCI6MTY0NjYyMjg5OCwiaWF0IjoxNjQ2NTg2ODk4fQ.VnJPuNy6BD1lRjcyfnMTR9ZgZhcqd5uWaEjomAmHbUg");
		CarDetails details = new CarDetails();
		details.setCarName("Maruti Swift");
		details.setCompanyName("Maruti Suzuki");
		details.setFuelType("Petrol");
		details.setSeatingCapacity(4);
		details.setBreakSystem("Anti-Lock");
		details.setGearType("Knob");
		details.setEngineCapacity(1197);
		details.setMileage(23.4);
		details.setOnroadPrice(5600000.65);
		details.setShowroom_Price(56789234.87);
		boolean data=service.insertData(details);
		when(data).thenReturn(data);
System.out.println("hiiiiiiiii=====>");
		 String content = mvc
				.perform(post("/car/new").contentType(MediaType.APPLICATION_JSON_VALUE)
						.content(mapper.writeValueAsString(details)).accept(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
	System.out.println("=============hiii>");

		ResponseEntity response = mapper.readValue(content, ResponseEntity.class);
		System.out.println("result" + content);
		assertEquals(true, response);
	}

	@Test
	void testGetData() {
		fail("Not yet implemented");
	}

	@Test
	void testGetCarData() {
		fail("Not yet implemented");
	}

	@Test
	void testGetDataString() {
		fail("Not yet implemented");
	}

	@Test
	void testGetData1() {
		fail("Not yet implemented");
	}

	@Test
	void testGetFuelType() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdateData() throws UnsupportedEncodingException, Exception {
		MockHttpServletRequest request = new MockHttpServletRequest();
		request.addHeader("Authorization", "Bearer ");
		CarDetails details = new CarDetails();
		details.setCarName("Maruti Swift");
		details.setCompanyName("Maruti Suzuki");
		details.setFuelType("Petrol");
		details.setSeatingCapacity(4);
		boolean data=service.updateData(details);
		when(data).thenReturn(data);
		
		String content=mvc.perform(put("/admin/updatecar/24").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(mapper.writeValueAsString(details)).accept(MediaType.APPLICATION_JSON_VALUE))
		.andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
		
		ResponseEntity response=mapper.readValue(content,ResponseEntity.class);
		
		System.out.println("result" + content);
		assertEquals("updated successfully", response.getStatusCodeValue());
	}

	@Test
	void testRemoveData() {
		fail("Not yet implemented");
	}

	@Test
	void testObject() {
		fail("Not yet implemented");
	}

	@Test
	void testGetClass() {
		fail("Not yet implemented");
	}

	@Test
	void testHashCode() {
		fail("Not yet implemented");
	}

	@Test
	void testEquals() {
		fail("Not yet implemented");
	}

	@Test
	void testClone() {
		fail("Not yet implemented");
	}

	@Test
	void testToString() {
		fail("Not yet implemented");
	}

	@Test
	void testNotify() {
		fail("Not yet implemented");
	}

	@Test
	void testNotifyAll() {
		fail("Not yet implemented");
	}

	@Test
	void testWait() {
		fail("Not yet implemented");
	}

	@Test
	void testWaitLong() {
		fail("Not yet implemented");
	}

	@Test
	void testWaitLongInt() {
		fail("Not yet implemented");
	}

	@Test
	void testFinalize() {
		fail("Not yet implemented");
	}

}
