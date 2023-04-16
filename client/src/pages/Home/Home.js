import React from 'react'

// Style
import "../../styles/pages/home.css"

const Home = () => {
    return (
        <main>
            <div className='flex-row justify-center'>
                <div
                    className='col-12 col-md-10 mb-3 p-3'
                    style={{ border: '1px dotted' }}
                >
                    <h3>Description of Application</h3>
                    <p>All the Text to describe this application.</p>
                </div>
                <div className='flex-row justify-center align-center'>
                    <div className='col-12 col-md-8 mb-3'>

                    </div>
                </div>

            </div>
        </main>
    )
}
export default Home