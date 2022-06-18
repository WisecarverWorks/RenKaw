// import React from 'react';
// import { Grid, Image } from 'semantic-ui-react';


// const GridColumnCount = () => (
//     <Grid>
//         <Grid.Row columns={3}>
//             <Grid.Column>
//                 <Image src='/src/components/Images/ralph.jpg' />
//             </Grid.Column>
//             <Grid.Column>
//                 <Image src='/src/components/Images/patrick.jpg' />
//             </Grid.Column>
//             <Grid.Column>
//                 <Image src='/src/components/Images/markus.jpg.jpg' />
//             </Grid.Column>
//         </Grid.Row>
//         <Grid.Row columns={4}>
//             <Grid.Column>
//                 <Image src='/src/components/Images/markup.jpg.jpg' />
//             </Grid.Column>
//             <Grid.Column>
//                 <Image src='/src/components/Images/engin.jpg.jpg' />
//             </Grid.Column>
//             <Grid.Column>
//                 <Image src='/src/components/Images/birmingha.jpg' />
//             </Grid.Column>
//             <Grid.Column>
//                 <Image src='/src/components/Images/ralph.jpg' />
//             </Grid.Column>
//         </Grid.Row>
//     </Grid>
// )

// export default GridColumnCount;







// <Container className='container'>
//       <Form className="from" onSubmit={handleSubmit}>
//         <div class="ui grid">
//           <div class="three column row">
//             <Label type='brand'>Username:{" "}<input type="text" name="username" value={formData.username} onChange={handleInputChange}/></Label>
//             <div class="column">
//               <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//              <Label type="brand"> Password:{" "}<input type="text" name="password" value={formData.password} onChange={handleInputChange}/></Label>
//               <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//               <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//           </div>
//         </div>
//       </Form>
//         <div class="four column row">
//           <Form className="form">
//             <div class="column">
//               <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//               <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//               <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//               <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//           </Form>
//       </div>
//         <div class="five column row">
//           <Form className="form">
//             <div class="column">
//                 <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//                 <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//                 <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//                 <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//             <div class="column">
//                 <image src="../../components/Images/ralph.jpg" class="ui image"/>
//             </div>
//           </Form>
//             <Button type="submit" onClick={handleSubmit}>Login!</Button>
//         </div>
//         {isServerError ? (
//         <p className="error">Login failed, incorrect credentials!</p>
//         ) : null}
//         <Link to="/register">Click to register!</Link>
//     </Container>