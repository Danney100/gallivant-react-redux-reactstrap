import React,{ useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, Input } from 'reactstrap'

function Filter() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    const [isPayProcess, setPayProcess] = useState(false)
    const [isQualificationsProcess, setQualificationsProcess] = useState(false)
      
    return (
        <Dropdown isOpen={isOpen} toggle={toggle} className="filter active-filter">
            <DropdownToggle
                caret
                tag="span"
                data-toggle="dropdown"
                aria-expanded={isOpen}
                className="pointer"
            >
                <span className="mr-2">Filter</span>
            </DropdownToggle>
            <DropdownMenu className="border-0 p-3">
                <div className={`filter ${isPayProcess && 'active-filter'}`}>
                    <Input 
                        type="checkbox" 
                        onChange={()=>setPayProcess(!isPayProcess)} 
                        className="ml-0 mr-2 filter-input" 
                    /> 
                    Pay Process Runs
                </div>
                <div className={`filter ${isQualificationsProcess?'active-filter':''}`}>
                    <Input 
                        type="checkbox" 
                        onChange={()=>setQualificationsProcess(!isQualificationsProcess)} 
                        className="ml-0 mr-2 filter-input"
                    />
                    Qualifications Process Runs
                </div>
            </DropdownMenu>
        </Dropdown>
    )
}

export default Filter
