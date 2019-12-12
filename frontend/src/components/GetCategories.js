import React, { useState, useEffect, Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import axios from 'axios'

const animatedComponents = makeAnimated()

function CreateCategoryDropDown() {

  useEffect(addCategories,[])

  const [categoriesList, setCategoriesList] = useState([])
  const [subcategoriesList, setSubcategoriesList] = useState([])
  const [subcategoriesSelected, setSubcategoriesSelected] = useState([])

  function drillDown(e) {
    const categoryObj = categoriesList.find(elem => {
      return elem.value === e.value
    })
    const temp = categoryObj.subcategories.map((elem) => {
      return {
        value: elem.category_name,
        label: elem.name
      }
    })
    setSubcategoriesList(temp)
  }

  function subCatsSelected(e) {
    const test = e.map((elem) => {
      return elem.value
    })
    setSubcategoriesSelected(test)
  }

  function addCategories() {
    axios.get('http://localhost:8000/api/categories')
      .then(res => manipulateResponseData(res.data))
      .catch(err => console.log(err))
  }

  function manipulateResponseData(input) {
    const temp = input.map((category) => {
      return {
        value: category.name,
        label: category.short_name,
        subcategories: category.subcategories
      }
    })
    console.log(temp)
    setCategoriesList(temp)
  }

}

module.exports = CreateCategoryDropDown