import React from 'react';

const page = () => {
    const entireHTML = `
    <!DOCTYPE html>
    <meta charset="UTF-8"/>
        <meta name="title" content="Krutrim - India's own AI">
        <meta name="description" content="description Scale your computational capabilities and experience the GPU services like never before">
        <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <html lang="en">
        <head>      
        <style>
            .poppins-regular {
                font-family: "Poppins", sans-serif;
                font-weight: 400;
                font-style: normal;
                border: 1px solid #fff;
                margin: 0% 15%;
                display: block;
            }

            .poppins-regular h1 {
                font-size: 2em; /* Adjust the font size as needed */
                margin-bottom: 0.5em; /* Adjust the margin bottom as needed */
                color: #fff; /* Adjust the color as needed */
            }
            
            .poppins-regular h3 {
                font-size: 1.5em; /* Adjust the font size as needed */
                margin-bottom: 1em; /* Adjust the margin bottom as needed */
                color: #fff; /* Adjust the color as needed */
            }
            
            .poppins-regular p {
                font-size: 1em; /* Adjust the font size as needed */
                color: #aaa; /* Adjust the color as needed */
            }

            a {
                color: aqua;
            }
        </style>
        </head>
        <body style="background: #000; color:#fff; padding: 25vh 0; text-align: center;">
            <div class="poppins-regular">
                <h1>KRUTRIM</h1>
                <h3>Krutrim AI cloud isn't available yet in your geography.</h3>
                <p>In the meantime, you can learn more about us <a href="https://olakrutrim.com/about-us/" target="_blank">here</a></p>
            </div>
        </body>
    </html>
  `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: entireHTML }} />
            {/* Add line spaces here */}
            <div style={{ height: '400px' }}></div>
        </div>
    );
};

export default page;
