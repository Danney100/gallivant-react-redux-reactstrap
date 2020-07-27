import React from 'react'
import {FormGroup, Button, CustomInput} from 'reactstrap'
import PropTypes from 'prop-types'

const ModuleGroup = ({label, fields, index, open, setOpen, checkAll, setCheckAll}) => {
  const regex = /[\s/]/g
  const checkboxId = (label, field) => {
    const newLabel = label.replace(regex, '')
    const newField = field.replace(regex, '')
    return `${newLabel}_${newField}`
  }

  const checkAllModules = e => {
    let newCheckAll = checkAll;
    let fields = newCheckAll[index].fields;

    newCheckAll[index].isChecked = e.target.checked;
    for (let field of fields) {
      field.isChecked = e.target.checked;
    }

    setCheckAll(newCheckAll);
  }

  const showItems = () => {
    setOpen(index)
  }

  const responseCheckAll = (e, fieldIndex) => {
    let newCheckAll = checkAll;
    let checkedCounter = 0;
    newCheckAll[index].fields[fieldIndex].isChecked = e.target.checked;

    for (let field of newCheckAll[index].fields) {
      if (field.isChecked) checkedCounter++
    }

    newCheckAll[index].isChecked = newCheckAll[index].fields.length === checkedCounter;

    setCheckAll(newCheckAll);
  }

  return (
    <div className="sc-module-group-wrapper">
      <div className="d-flex align-items-center sc-sfui-text-semibold">
        <FormGroup className="mb-0">
          <CustomInput
            type="checkbox"
            className="sc-module-group-checkbox"
            id={ `fieldGroup-${index}` }
            onChange={ checkAllModules }
          />
        </FormGroup>
        <Button
          className={`
            sc-collapse-menu sc-module-group-btn d-flex align-items-center justify-content-between
            ${open === index ? 'open' : ''}
          `}
          color="link"
          onClick={ showItems }
        >
          <span className="sc-collapse-label text-left pr-2">{ label }</span>
          <i className="sc-collapse-arrow fa far fa-angle-right"/>
        </Button>
      </div>
      <FormGroup
        id={ `moduleGroupCol2-${index}` }
        className={`sc-collapse-panel-lv2 my-2 px-4 w-100 ${open === index ? 'd-block' : 'd-none'}`}
      >
        <h2 className="sc-heading d-none d-lg-block">{ label }</h2>
        {fields.map((field, fieldIndex) => {
          return (
            <CustomInput
              key={ fieldIndex }
              type="checkbox"
              className="sc-module-group-checkbox"
              id={ checkboxId(label, field) }
              name={ checkboxId(label, field) }
              label={ field }
              defaultChecked={ checkAll[index].isChecked }
              onChange={(e) => { responseCheckAll(e, fieldIndex) }}
            />
          )
        })}
      </FormGroup>
    </div>
  )
}

ModuleGroup.propTypes = {
  label: PropTypes.string,
  fields: PropTypes.array,
  index: PropTypes.number,
  open: PropTypes.number,
  setOpen: PropTypes.func,
  checkAll: PropTypes.array,
  setCheckAll: PropTypes.func,
}

export default ModuleGroup
