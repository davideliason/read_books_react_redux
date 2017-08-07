import Number from '../components/Number.js';
import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => {
	return {
		number  : state.num
	}
}

const WrapperNumber = connect(
	mapStateToProps
	)(Number)

export default WrapperNumber