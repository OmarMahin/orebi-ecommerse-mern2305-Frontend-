import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { toast } from "react-toastify"
import emailValidation from "../helpers/emailValidation"
import Button from "./Button"
import Flex from "./Flex"

const SignUpForm = () => {
	// Field Inputs

	let [fname, setFname] = useState("")
	let [lname, setLname] = useState("")
	let [email, setEmail] = useState("")
	let [tel, setTel] = useState("")
	let [address1, setAddress1] = useState("")
	let [address2, setAddress2] = useState("")
	let [city, setCity] = useState("")
	let [postCode, setPostCode] = useState("")
	let [country, setCountry] = useState("")
	let [password, setPassword] = useState("")
	let [repeatPassword, setRepeatPassword] = useState("")
	let [showPassword, setShowPassword] = useState("")
	let [showRepeatPassword, setShowRepeatPassword] = useState("")
	let [checked_tc, setChecked_tc] = useState("")
	let [newsletter, setNewsletter] = useState(false)

	// Field Errors

	let [fnameError, setFnameError] = useState(false)
	let [lnameError, setLnameError] = useState(false)
	let [emailError, setEmailError] = useState(false)
	let [telError, setTelError] = useState(false)
	let [address1Error, setAddress1Error] = useState(false)
	let [cityError, setCityError] = useState(false)
	let [postCodeError, setPostCodeError] = useState(false)
	let [countryError, setCountryError] = useState(false)
	let [passwordError, setPasswordError] = useState(false)
	let [repeatPasswordError, setRepeatPasswordError] = useState(false)

	function errorsToEmpty() {
		setFnameError(false)
		setLnameError(false)
		setEmailError(false)
		setTelError(false)
		setAddress1Error(false)
		setCityError(false)
		setPostCodeError(false)
		setCountryError(false)
		setPasswordError(false)
		setRepeatPasswordError(false)
	}

	let handleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	let handleShowRepeatPassword = () => {
		setShowRepeatPassword(!showRepeatPassword)
	}

	let handleNewsletter = (e) => {
		setNewsletter(e.target.value)
	}

	let handleSubmit = (e) => {
		e.preventDefault()

		if (!fname) {
			errorsToEmpty()
			setFnameError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}

		if (!lname) {
			errorsToEmpty()
			setLnameError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
		if (!email) {
			errorsToEmpty()
			setEmailError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}

		if (!emailValidation(email)) {
			errorsToEmpty()
			setEmailError(true)
			toast.error("Invalid email address")
			return
		}

		if (!tel) {
			errorsToEmpty()
			setTelError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
		if (!address1) {
			errorsToEmpty()
			setAddress1Error(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
		if (!city) {
			errorsToEmpty()
			setCityError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
		if (!country) {
			errorsToEmpty()
			setCountryError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
		if (!postCode) {
			errorsToEmpty()
			setPostCodeError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
		if (!password) {
			errorsToEmpty()
			setPasswordError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
		if (!repeatPassword) {
			errorsToEmpty()
			setRepeatPasswordError(true)
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}

		if (password != repeatPassword) {
			errorsToEmpty()
			setPasswordError(true)
			setRepeatPasswordError(true)
			toast.error("Passwords do not match")
			return
		}

		if (!checked_tc) {
			errorsToEmpty()
			toast.error("Please check all the mandetory(*) fields are filled up")
			return
		}
	}

	return (
		<Flex className={" mt-12 mb-28 w-full"}>
			<form className='w-full'>
				<Flex className={"flex flex-col gap-16"}>
					<h2 className='font-DM-sans font-bold text-4xl text-text-dark-color pt-12 border-light-background-color border-t-2 flex flex-col'>
						Your Personal Details
					</h2>
					<Flex className={"mt-10 justify-start w-full gap-10"}>
						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									First Name
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<input
								type={"text"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									fnameError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"First Name"}
								onChange={(e) => {
									setFname(e.target.value)
								}}
							></input>

							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Email Address
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<input
								type={"email"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									emailError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Email"}
								onChange={(e) => {
									setEmail(e.target.value)
								}}
							></input>
						</Flex>
						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Last Name
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<input
								type={"text"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									lnameError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Last Name"}
								onChange={(e) => {
									setLname(e.target.value)
								}}
							></input>

							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Telephone
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<input
								type={"tel"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									telError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Your phone number"}
								onChange={(e) => {
									setTel(e.target.value)
								}}
							></input>
						</Flex>
					</Flex>

					<h2 className='font-DM-sans font-bold text-4xl text-text-dark-color pt-12 border-light-background-color border-t-2 flex flex-col'>
						New Customer
					</h2>
					<Flex className={"mt-10 justify-start w-full gap-10"}>
						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Address 1
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<input
								type={"text"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									address1Error ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Address 1"}
								onChange={(e) => {
									setAddress1(e.target.value)
								}}
							></input>

							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									City
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<input
								type={"text"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									cityError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Your city"}
								onChange={(e) => {
									setCity(e.target.value)
								}}
							></input>

							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Country
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<select
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									countryError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								onChange={(e) => {
									setCountry(e.target.value)
								}}
							>
								<option selected>Select country</option>
								<option value='AF'>Afghanistan</option>
								<option value='AX'>Åland Islands</option>
								<option value='AL'>Albania</option>
								<option value='DZ'>Algeria</option>
								<option value='AS'>American Samoa</option>
								<option value='AD'>Andorra</option>
								<option value='AO'>Angola</option>
								<option value='AI'>Anguilla</option>
								<option value='AQ'>Antarctica</option>
								<option value='AG'>Antigua and Barbuda</option>
								<option value='AR'>Argentina</option>
								<option value='AM'>Armenia</option>
								<option value='AW'>Aruba</option>
								<option value='AU'>Australia</option>
								<option value='AT'>Austria</option>
								<option value='AZ'>Azerbaijan</option>
								<option value='BS'>Bahamas</option>
								<option value='BH'>Bahrain</option>
								<option value='BD'>Bangladesh</option>
								<option value='BB'>Barbados</option>
								<option value='BY'>Belarus</option>
								<option value='BE'>Belgium</option>
								<option value='BZ'>Belize</option>
								<option value='BJ'>Benin</option>
								<option value='BM'>Bermuda</option>
								<option value='BT'>Bhutan</option>
								<option value='BO'>Bolivia, Plurinational State of</option>
								<option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
								<option value='BA'>Bosnia and Herzegovina</option>
								<option value='BW'>Botswana</option>
								<option value='BV'>Bouvet Island</option>
								<option value='BR'>Brazil</option>
								<option value='IO'>British Indian Ocean Territory</option>
								<option value='BN'>Brunei Darussalam</option>
								<option value='BG'>Bulgaria</option>
								<option value='BF'>Burkina Faso</option>
								<option value='BI'>Burundi</option>
								<option value='KH'>Cambodia</option>
								<option value='CM'>Cameroon</option>
								<option value='CA'>Canada</option>
								<option value='CV'>Cape Verde</option>
								<option value='KY'>Cayman Islands</option>
								<option value='CF'>Central African Republic</option>
								<option value='TD'>Chad</option>
								<option value='CL'>Chile</option>
								<option value='CN'>China</option>
								<option value='CX'>Christmas Island</option>
								<option value='CC'>Cocos (Keeling) Islands</option>
								<option value='CO'>Colombia</option>
								<option value='KM'>Comoros</option>
								<option value='CG'>Congo</option>
								<option value='CD'>Congo, the Democratic Republic of the</option>
								<option value='CK'>Cook Islands</option>
								<option value='CR'>Costa Rica</option>
								<option value='CI'>Côte d'Ivoire</option>
								<option value='HR'>Croatia</option>
								<option value='CU'>Cuba</option>
								<option value='CW'>Curaçao</option>
								<option value='CY'>Cyprus</option>
								<option value='CZ'>Czech Republic</option>
								<option value='DK'>Denmark</option>
								<option value='DJ'>Djibouti</option>
								<option value='DM'>Dominica</option>
								<option value='DO'>Dominican Republic</option>
								<option value='EC'>Ecuador</option>
								<option value='EG'>Egypt</option>
								<option value='SV'>El Salvador</option>
								<option value='GQ'>Equatorial Guinea</option>
								<option value='ER'>Eritrea</option>
								<option value='EE'>Estonia</option>
								<option value='ET'>Ethiopia</option>
								<option value='FK'>Falkland Islands (Malvinas)</option>
								<option value='FO'>Faroe Islands</option>
								<option value='FJ'>Fiji</option>
								<option value='FI'>Finland</option>
								<option value='FR'>France</option>
								<option value='GF'>French Guiana</option>
								<option value='PF'>French Polynesia</option>
								<option value='TF'>French Southern Territories</option>
								<option value='GA'>Gabon</option>
								<option value='GM'>Gambia</option>
								<option value='GE'>Georgia</option>
								<option value='DE'>Germany</option>
								<option value='GH'>Ghana</option>
								<option value='GI'>Gibraltar</option>
								<option value='GR'>Greece</option>
								<option value='GL'>Greenland</option>
								<option value='GD'>Grenada</option>
								<option value='GP'>Guadeloupe</option>
								<option value='GU'>Guam</option>
								<option value='GT'>Guatemala</option>
								<option value='GG'>Guernsey</option>
								<option value='GN'>Guinea</option>
								<option value='GW'>Guinea-Bissau</option>
								<option value='GY'>Guyana</option>
								<option value='HT'>Haiti</option>
								<option value='HM'>Heard Island and McDonald Islands</option>
								<option value='VA'>Holy See (Vatican City State)</option>
								<option value='HN'>Honduras</option>
								<option value='HK'>Hong Kong</option>
								<option value='HU'>Hungary</option>
								<option value='IS'>Iceland</option>
								<option value='IN'>India</option>
								<option value='ID'>Indonesia</option>
								<option value='IR'>Iran, Islamic Republic of</option>
								<option value='IQ'>Iraq</option>
								<option value='IE'>Ireland</option>
								<option value='IM'>Isle of Man</option>
								<option value='IL'>Israel</option>
								<option value='IT'>Italy</option>
								<option value='JM'>Jamaica</option>
								<option value='JP'>Japan</option>
								<option value='JE'>Jersey</option>
								<option value='JO'>Jordan</option>
								<option value='KZ'>Kazakhstan</option>
								<option value='KE'>Kenya</option>
								<option value='KI'>Kiribati</option>
								<option value='KP'>Korea, Democratic People's Republic of</option>
								<option value='KR'>Korea, Republic of</option>
								<option value='KW'>Kuwait</option>
								<option value='KG'>Kyrgyzstan</option>
								<option value='LA'>Lao People's Democratic Republic</option>
								<option value='LV'>Latvia</option>
								<option value='LB'>Lebanon</option>
								<option value='LS'>Lesotho</option>
								<option value='LR'>Liberia</option>
								<option value='LY'>Libya</option>
								<option value='LI'>Liechtenstein</option>
								<option value='LT'>Lithuania</option>
								<option value='LU'>Luxembourg</option>
								<option value='MO'>Macao</option>
								<option value='MK'>Macedonia, the former Yugoslav Republic of</option>
								<option value='MG'>Madagascar</option>
								<option value='MW'>Malawi</option>
								<option value='MY'>Malaysia</option>
								<option value='MV'>Maldives</option>
								<option value='ML'>Mali</option>
								<option value='MT'>Malta</option>
								<option value='MH'>Marshall Islands</option>
								<option value='MQ'>Martinique</option>
								<option value='MR'>Mauritania</option>
								<option value='MU'>Mauritius</option>
								<option value='YT'>Mayotte</option>
								<option value='MX'>Mexico</option>
								<option value='FM'>Micronesia, Federated States of</option>
								<option value='MD'>Moldova, Republic of</option>
								<option value='MC'>Monaco</option>
								<option value='MN'>Mongolia</option>
								<option value='ME'>Montenegro</option>
								<option value='MS'>Montserrat</option>
								<option value='MA'>Morocco</option>
								<option value='MZ'>Mozambique</option>
								<option value='MM'>Myanmar</option>
								<option value='NA'>Namibia</option>
								<option value='NR'>Nauru</option>
								<option value='NP'>Nepal</option>
								<option value='NL'>Netherlands</option>
								<option value='NC'>New Caledonia</option>
								<option value='NZ'>New Zealand</option>
								<option value='NI'>Nicaragua</option>
								<option value='NE'>Niger</option>
								<option value='NG'>Nigeria</option>
								<option value='NU'>Niue</option>
								<option value='NF'>Norfolk Island</option>
								<option value='MP'>Northern Mariana Islands</option>
								<option value='NO'>Norway</option>
								<option value='OM'>Oman</option>
								<option value='PK'>Pakistan</option>
								<option value='PW'>Palau</option>
								<option value='PS'>Palestinian Territory, Occupied</option>
								<option value='PA'>Panama</option>
								<option value='PG'>Papua New Guinea</option>
								<option value='PY'>Paraguay</option>
								<option value='PE'>Peru</option>
								<option value='PH'>Philippines</option>
								<option value='PN'>Pitcairn</option>
								<option value='PL'>Poland</option>
								<option value='PT'>Portugal</option>
								<option value='PR'>Puerto Rico</option>
								<option value='QA'>Qatar</option>
								<option value='RE'>Réunion</option>
								<option value='RO'>Romania</option>
								<option value='RU'>Russian Federation</option>
								<option value='RW'>Rwanda</option>
								<option value='BL'>Saint Barthélemy</option>
								<option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
								<option value='KN'>Saint Kitts and Nevis</option>
								<option value='LC'>Saint Lucia</option>
								<option value='MF'>Saint Martin (French part)</option>
								<option value='PM'>Saint Pierre and Miquelon</option>
								<option value='VC'>Saint Vincent and the Grenadines</option>
								<option value='WS'>Samoa</option>
								<option value='SM'>San Marino</option>
								<option value='ST'>Sao Tome and Principe</option>
								<option value='SA'>Saudi Arabia</option>
								<option value='SN'>Senegal</option>
								<option value='RS'>Serbia</option>
								<option value='SC'>Seychelles</option>
								<option value='SL'>Sierra Leone</option>
								<option value='SG'>Singapore</option>
								<option value='SX'>Sint Maarten (Dutch part)</option>
								<option value='SK'>Slovakia</option>
								<option value='SI'>Slovenia</option>
								<option value='SB'>Solomon Islands</option>
								<option value='SO'>Somalia</option>
								<option value='ZA'>South Africa</option>
								<option value='GS'>South Georgia and the South Sandwich Islands</option>
								<option value='SS'>South Sudan</option>
								<option value='ES'>Spain</option>
								<option value='LK'>Sri Lanka</option>
								<option value='SD'>Sudan</option>
								<option value='SR'>Suriname</option>
								<option value='SJ'>Svalbard and Jan Mayen</option>
								<option value='SZ'>Swaziland</option>
								<option value='SE'>Sweden</option>
								<option value='CH'>Switzerland</option>
								<option value='SY'>Syrian Arab Republic</option>
								<option value='TW'>Taiwan, Province of China</option>
								<option value='TJ'>Tajikistan</option>
								<option value='TZ'>Tanzania, United Republic of</option>
								<option value='TH'>Thailand</option>
								<option value='TL'>Timor-Leste</option>
								<option value='TG'>Togo</option>
								<option value='TK'>Tokelau</option>
								<option value='TO'>Tonga</option>
								<option value='TT'>Trinidad and Tobago</option>
								<option value='TN'>Tunisia</option>
								<option value='TR'>Turkey</option>
								<option value='TM'>Turkmenistan</option>
								<option value='TC'>Turks and Caicos Islands</option>
								<option value='TV'>Tuvalu</option>
								<option value='UG'>Uganda</option>
								<option value='UA'>Ukraine</option>
								<option value='AE'>United Arab Emirates</option>
								<option value='GB'>United Kingdom</option>
								<option value='US'>United States</option>
								<option value='UM'>United States Minor Outlying Islands</option>
								<option value='UY'>Uruguay</option>
								<option value='UZ'>Uzbekistan</option>
								<option value='VU'>Vanuatu</option>
								<option value='VE'>Venezuela, Bolivarian Republic of</option>
								<option value='VN'>Viet Nam</option>
								<option value='VG'>Virgin Islands, British</option>
								<option value='VI'>Virgin Islands, U.S.</option>
								<option value='WF'>Wallis and Futuna</option>
								<option value='EH'>Western Sahara</option>
								<option value='YE'>Yemen</option>
								<option value='ZM'>Zambia</option>
								<option value='ZW'>Zimbabwe</option>
							</select>
						</Flex>
						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
								Address 2
							</span>
							<input
								type={"text"}
								className={
									"w-full focus:outline-none py-4 border-b-2 border-[#e2e2e2] placeholder:font-DM-sans placeholder:font-semibold"
								}
								placeholder={"Address 2"}
								onChange={(e) => {
									setAddress2(e.target.value)
								}}
							></input>

							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Post Code
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<input
								type={"text"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									postCodeError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Post Code"}
								onChange={(e) => {
									setPostCode(e.target.value)
								}}
							></input>
						</Flex>
					</Flex>

					<h2 className='font-DM-sans font-bold text-4xl text-text-dark-color pt-12 border-light-background-color border-t-2 flex flex-col'>
						Your Password
					</h2>
					<Flex className={"mt-10 justify-start w-full gap-10"}>
						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Password
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<div className='relative'>
								<input
									type={showPassword ? "text" : "password"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										passwordError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Password"}
									onChange={(e) => {
										setPassword(e.target.value)
									}}
								></input>
								{password ? (
									!showPassword ? (
										<FaEye
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowPassword}
										></FaEye>
									) : (
										<FaEyeSlash
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowPassword}
										></FaEyeSlash>
									)
								) : (
									""
								)}
							</div>
						</Flex>
						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Repeat Password
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<div className='relative'>
								<input
									type={showRepeatPassword ? "text" : "password"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										repeatPasswordError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Repeat password"}
									onChange={(e) => {
										setRepeatPassword(e.target.value)
									}}
								></input>
								{repeatPassword ? (
									!showRepeatPassword ? (
										<FaEye
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowRepeatPassword}
										></FaEye>
									) : (
										<FaEyeSlash
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowRepeatPassword}
										></FaEyeSlash>
									)
								) : (
									""
								)}
							</div>
						</Flex>
					</Flex>
				</Flex>
				<Flex className={"gap-4 justify-start mt-14"}>
					<input
						type={"checkbox"}
						onChange={(e) => {
							setChecked_tc(e.target.checked)
						}}
					></input>
					<Flex className={"items-center gap-2"}>
						<span className='font-DM-sans text-text-light-color'>
							I have read and agree to the Privacy Policy
						</span>
						<span className='text-red-400 text-xl'>*</span>
					</Flex>
				</Flex>
				<Flex className={"gap-4 justify-start mt-5 font-DM-sans text-text-light-color"}>
					<span className=''>Subscribe Newsletter</span>
					<input
						type={"radio"}
						id={"Yes"}
						name={"newsletter"}
						value={true}
						onChange={handleNewsletter}
					></input>
					<label for={"Yes"}>Yes</label>
					<input
						type={"radio"}
						id={"No"}
						name={"newsletter"}
						value={false}
						onChange={handleNewsletter}
					></input>
					<label for={"No"}>No</label>
				</Flex>

				<Button className={"mt-8"} onClick={handleSubmit}>
					Sign Up
				</Button>
			</form>
		</Flex>
	)
}

export default SignUpForm
