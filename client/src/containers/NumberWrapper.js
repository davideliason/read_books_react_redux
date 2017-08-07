import Number from '../components/Number.js';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNumber} from '../actions/index.js'

const mapStateToProps = state => {
	return {
		number  : state.num
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: () => {
			dispatch(addNumber(1))
		}
	}
}

const WrapperNumber = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Number)

export default WrapperNumber