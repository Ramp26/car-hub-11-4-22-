import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

function AdminRegister() {

    const [superArr, setsuperArr] = useState({})
    
    const [superObj, setsuperObj] = useState({
        adminName: '',
        adminContact_No: '',
        adminGmail: '',
        role: '',
        adminUserName: '',
        adminPassword: '',
        confirmpassword: ''
    })
    
    const [superConfirmPasswordError, setsuperConfirmPasswordError] = useState('')
    const [isConfirmPasswordValid, setConfirmisIdValid] = useState(false)
    const [superNameError, setsuperNameError] = useState('')
    const [isNameValid, setisNameValid] = useState(false)
    const [superPhoneError, setsuperPhoneError] = useState('')
    const [isPhoneValid, setisphoneValid] = useState(false)
    const [superEmailError, setsuperEmailError] = useState('')
    const [isEmailValid, setisEmailValid] = useState(false)
    const [superRoleError, setsuperERoleError] = useState('')
    const [isRoleValid, setisRoleValid] = useState(false)
    const [superUserError, setsuperUserError] = useState('')
    const [isUserValid, setisUserValid] = useState(false)
    const [superPasswordError, setsuperPasswordError] = useState('')
    const [isPasswordValid, setisPasswordValid] = useState(false)
    const handleChange = (e) => {
        setsuperObj({
            ...superObj,
            [e.target.name]: e.target.value
        })
        console.log('SuperObj ->', superObj);
    }

    const handleRegistration =async(props) => {

        const isNameValid = validateName(superObj.adminName)
        const isphoneNumValid = validatePhone(superObj.adminContact_No)
        const isEmailValid = validateEmail(superObj.adminGmail)
        const isRoleValid = validateRole(superObj.role)
        const isUserNameValid = validateUserName(superObj.adminUserName)
        const isPassValid = validatePassword(superObj.adminPassword)
        const isConfirmValid = validateConfirmPassword(superObj.confirmpassword, superObj.adminPassword)
        if (isConfirmValid === true && isPassValid === true && isUserNameValid === true && isRoleValid === true && isNameValid === true && isphoneNumValid === true && isEmailValid === true) {
            setsuperArr({
                ...superArr,
                superObj
        })

            let res = await axios.post("http://localhost:8080/admin/reg",superObj);
            setsuperObj({
               adminName: '',
                adminContact_No: '',
                adminGmail: '',
                role: '',
                adminUserName: '',
                adminPassword: '',
                confirmpassword: ''
            })
            props.history.push('/adminlogin')
        } else {
            alert('give valid data')
        }
    }
    console.log(superArr);

    //name validation
    const validateName = (name) => {
        if (name !== '') {
            let lName = (/^[a-zA-Z]+$/);
            if (name.match(lName)) {
                setisNameValid(true)
                setsuperNameError('')
                console.log(superNameError);
                return true
            } else {
                setisNameValid(false)
                setsuperNameError('*Please enter valid name')
                console.log(superNameError);
                return false
            }
        } else {
            setisNameValid(false)
            setsuperNameError('*Please enter your name')
            console.log(superNameError);
            return false
        }
    }

    //phone validation
    const validatePhone = (phone) => {
        const num = /^\d{10}$/;
        if (phone !== '') {
            if (phone.match(num)) {
                setisphoneValid(true)
                setsuperPhoneError('')
                return true
            } else {
                setisphoneValid(false)
                setsuperPhoneError('*Please enter valid phone number')
                console.log(superNameError);
                return false
            }
        } else {
            setisphoneValid(false)
            setsuperPhoneError('*Please enter your phone number')
            return false
        }
    }

    //email validation
    const validateEmail = (email) => {
        if (email) {
            let mail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
            if (email.match(mail)) {
                setisEmailValid(true)
                setsuperEmailError('')
                return true
            } else {
                setisEmailValid(false)
                setsuperEmailError('*Please enter valid email-id')
                return false
            }
        } else {
            setisEmailValid(false)
            setsuperEmailError('*Please enter your email-id')
            return false
        }
    }

    //Role validation
    const validateRole = (role) => {
        // const numId = /^[0-9]*$/;
        if (role !== '') {
            setisRoleValid(true)
            setsuperERoleError('')
            return true
        } else {
            setisRoleValid(false)
            setsuperERoleError('*Please enter your role')
            return false
        }
    }

    //userName validation
    const validateUserName = (name) => {
        if (name !== '') {
            let lName = (/^[a-zA-Z]+$/);
            if (name.match(lName)) {
                setisUserValid(true)
                setsuperUserError('')
                console.log(superNameError);
                return true
            } else {
                setisUserValid(false)
                setsuperUserError('*Please enter valid username')
                console.log(superNameError);
                return false
            }
        } else {
            setisUserValid(false)
            setsuperUserError('*Please enter your user name')
            console.log(superNameError);
            return false
        }
    }

    //password verification
    const validatePassword = (password) => {
        if (password) {
            let pass = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$^&*]).{6,20}$/;
            if (password.match(pass)) {
                setisPasswordValid(false)
                setsuperPasswordError('*Please enter valid password')
                return false

            } else {
               
                setisPasswordValid(true)
                setsuperPasswordError('')
                return true
            }
        } else {
            setisPasswordValid(false)
            setsuperPasswordError('*Please enter your passowrd')
            return false
        }
    }

    const validateConfirmPassword = (confirmPassword, password) => {
        if (confirmPassword) {

            if (confirmPassword === password) {
                setConfirmisIdValid(true)
                setsuperConfirmPasswordError('')
                return true
            } else {
                setConfirmisIdValid(false)
                setsuperConfirmPasswordError('*Invalid')
                return false
            }
        } else {
            setConfirmisIdValid(false)
            setsuperConfirmPasswordError('*ConfirmPassword cannot be empty')
            return false
        }
    }



    return (
        <div >
            <Card style={{ width: '30rem', margin: 'auto', marginTop: '20px',boxShadow:'15px 15px #696969', }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}> Register</Card.Title>

                    <Form.Control
                        className='mt-3'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Enter your name'
                        name={'adminName'}
                        value={superObj.adminName}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {!isNameValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superNameError}</span> : null}

                    <Form.Control
                         className='mt-3'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Enter your Phone Number'
                        name={'adminContact_No'}
                        value={superObj.adminContact_No}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {!isPhoneValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superPhoneError}</span> : null}

                    <Form.Control
                        type="text"
                         className='mt-3'
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Enter your email-Id'
                        name={'adminGmail'}
                        value={superObj.adminGmail}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {!isEmailValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superEmailError}</span> : null}

                    <Form.Control
                         className='mt-3'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Enter your Role like (ADMIN or SUPERADMIN)'
                        name={'role'}
                        value={superObj.role}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {!isRoleValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superRoleError}</span> : null}

                    <Form.Control
                         className='mt-3'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Enter your User Name'
                        name={'adminUserName'}
                        value={superObj.adminUserName}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {!isUserValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superUserError}</span> : null}

                    <Form.Control
                         className='mt-3'
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Enter your Password'
                        name={'adminPassword'}
                        value={superObj.adminPassword}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {!isPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superPasswordError}</span> : null}

                    <Form.Control
                         className='mt-3'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Confirm your Password'
                        name={'confirmpassword'}
                        value={superObj.confirmpassword}
                        onChange={(e) => { handleChange(e) }}
                    />
                    {!isConfirmPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '15px'
                    }}>{superConfirmPasswordError}</span> : null}

                    <div className='text-center'>
                        <Button
                            onClick={handleRegistration}
                            variant="primary"  className='mt-3'>Register</Button>
                    </div>


                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(AdminRegister)