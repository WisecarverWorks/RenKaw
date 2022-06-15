import { VechaiProvider } from '@vechaiui/react';
import React, { useState } from 'react';

const Assessments = (props) => {
    const [assessmentValue, setAssessmentValue] = useState => {""},  

        return (
        <div>
            <table >
                <theader>
                    <th>
                        <td>
                            <label itemType='document' typeof='text'/>Short
                        </td>
                    </th>
                    <th>
                        <td>
                            <label itemType='document' typeof='text'/>Medium
                        </td>
                    </th>
                    <th>
                        <td>
                            <label itemType='document' typeof='text'/>Long
                        </td>
                    </th>
                </theader>
            </table>
            <p><ul><li>A turpis et curae ac risus eros ullamcorper per. Ex ligula lorem condimentum primis justo consectetur odio potenti eget est. Vel bibendum condimentum mauris si risus.</li><li>Arcu laoreet semper litora nullam molestie. Elementum parturient urna ut amet hendrerit.</li><li>Viverra efficitur sociosqu volutpat suscipit leo mollis nulla eleifend class dictum. Consectetur tempor donec pulvinar nec auctor.</li></ul></p>
            <VechaiProvider type='text'>
                <input type="text">Enter your assessmentValue for this passage</input>
            </VechaiProvider>
            <p><ul><li>A turpis et curae ac risus eros ullamcorper per. Ex ligula lorem condimentum primis justo consectetur odio potenti eget est. Vel bibendum condimentum mauris si risus.</li><li>Arcu laoreet semper litora nullam molestie. Elementum parturient urna ut amet hendrerit.</li><li>Viverra efficitur sociosqu volutpat suscipit leo mollis nulla eleifend class dictum. Consectetur tempor donec pulvinar nec auctor.</li></ul></p>
            <VechaiProvider type='text'>
                <input type="text">Enter your assessmentValue for this passage</input>
            </VechaiProvider>
            <p><ul><li>A turpis et curae ac risus eros ullamcorper per. Ex ligula lorem condimentum primis justo consectetur odio potenti eget est. Vel bibendum condimentum mauris si risus.</li><li>Arcu laoreet semper litora nullam molestie. Elementum parturient urna ut amet hendrerit.</li><li>Viverra efficitur sociosqu volutpat suscipit leo mollis nulla eleifend class dictum. Consectetur tempor donec pulvinar nec auctor.</li></ul></p>
            <VechaiProvider type='text'>
                <input type="text">Enter your assessmentValue for this passage</input>
            </VechaiProvider>
        </div>
    )
};
    
