import React from "react"
import CategoryInformation from "./CategoryInformation"
import ProductInformation from "./ProductInformation"
import UserInformation from "./UserInformation"

const AdminPanelInformation = ({ id }) => {
	return id[0] == "1" ? (
		<UserInformation id={id[2]}></UserInformation>
	) : id[0] == "2" ? (
		<CategoryInformation id={id[2]}></CategoryInformation>
	) : id[0] == "3" ? (
		<ProductInformation id={id[2]}></ProductInformation>
	) : (
		""
	)
}

export default AdminPanelInformation
