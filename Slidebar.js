import 'primeicons/primeicons.css';
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState(false);
    return (
    <>
        <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <div className='m-4'>
            <Button label='Descision Making' raised className='m-2' />
            <Button label='Leave Pattern' raised className='m-2'/>
            <Button label='Absentism' raised className='m-2'/>
            </div>
        </Sidebar>
    
        <div style={{ color: 'var(--primary-color-text)', backgroundColor: 'var(--primary-color)', paddingLeft: '2rem', display: "flex", width: "102.1%"}}>
            <div className="md:col-2 pl-5 pt-3" style={{position:"absolute"}}>
                <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            </div>
    
            <div className="md:col-1" style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h1>Leave Prediction System</h1>
            </div>  
        </div>    
    </div>
</>
    )
}
        
