import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


const GridColumnCount = () => (
<Grid>
    <Grid.Row columns={3}>
        <Grid.Column>
            <Image src='/src/components/Images/ralph.jpg' />
        </Grid.Column>
        <Grid.Column>
            <Image src='/src/components/Images/patrick.jpg' />
        </Grid.Column>
        <Grid.Column>
            <Image src='/src/components/Images/markus.jpg.jpg' />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}>
        <Grid.Column>
            <Image src='/src/components/Images/markup.jpg.jpg' />
        </Grid.Column>
        <Grid.Column>
            <Image src='/src/components/Images/engin.jpg.jpg' />
        </Grid.Column>
        <Grid.Column>
            <Image src='/src/components/Images/birmingha.jpg' />
        </Grid.Column>
        <Grid.Column>
            <Image src='/src/components/Images/ralph.jpg' />
        </Grid.Column>
    </Grid.Row>
</Grid>
)

export default GridColumnCount;