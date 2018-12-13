import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';
import AboutUsPage from './components/AboutUsPage'
import ContactUs from './components/ContactUsPage'
import DesignServicesPage from './components/DesignServicesPage'
import HomePage from './components/HomePage'
import OrderConfirmationPage from './components/OrderConfirmationPage'
import OrderReviewPage from './components/OrderReviewPage'
import ProfilePage from './components/ProfilePage'
import ShoppingCartPage from './components/ShoppingCartPage'
import StorePage from './components/StorePage'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)


class App extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <Router>
<Switch>
<p>
          <NavbarTop/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto reiciendis culpa sint eaque! Debitis laudantium sit ratione doloribus quidem sint sunt dignissimos ut possimus odio rem sapiente eligendi deserunt natus distinctio commodi unde nesciunt, quis ipsa, aliquid dolorem nobis voluptate numquam. Impedit ratione numquam, debitis repellendus quis laudantium id nobis, incidunt facere maiores esse vitae veniam suscipit a nemo soluta! Quis adipisci doloremque neque, quibusdam reprehenderit cupiditate officia perspiciatis placeat odit, labore, libero sit quidem! Excepturi beatae, suscipit quas iste omnis cumque exercitationem harum aspernatur obcaecati cum non ut sequi, asperiores possimus quis dolor numquam autem accusantium architecto necessitatibus odio assumenda laborum ducimus qui? Suscipit nisi totam, possimus, soluta deserunt, magnam commodi qui aliquid et quisquam architecto tempore doloribus. Adipisci quibusdam incidunt sed laborum ea molestias ipsum quae dignissimos quam, temporibus ipsa quos facilis enim minima magni rerum odio nobis sunt tempore deleniti cumque repudiandae et. Natus id iure commodi ipsa? Praesentium quae odit natus! Cupiditate earum magnam incidunt autem maxime ea. Laudantium aliquam distinctio numquam non asperiores repudiandae itaque quibusdam quae dolores. Deserunt asperiores perferendis et odit, eius ea labore expedita illo pariatur laboriosam dolor placeat blanditiis quod facere, ducimus nostrum! Magni molestias dolorum, alias temporibus odio et velit excepturi soluta fugiat dignissimos! Laboriosam repudiandae, quasi error recusandae optio rerum vel molestias culpa voluptas ullam iusto doloremque totam quaerat eius qui soluta? Neque necessitatibus pariatur ipsum dignissimos atque suscipit alias consectetur, mollitia ex vero! Facere ab voluptates optio quis recusandae, dolorem nesciunt nostrum, accusamus ea tempore mollitia dolore in doloribus explicabo soluta repellendus deserunt atque esse molestiae dicta ratione architecto sit! Deleniti optio sed minus aliquid qui fuga ratione ipsum natus recusandae harum illum voluptatum labore, itaque nulla architecto similique quia quod, quidem error maiores consectetur ut deserunt? Distinctio eaque possimus eos ipsa earum facere temporibus perspiciatis voluptatem dignissimos, ab, illo deleniti consectetur quo id ipsum doloremque quasi quia consequuntur! Provident reprehenderit accusamus magni libero laboriosam aut sapiente accusantium dignissimos nesciunt, saepe blanditiis reiciendis maxime eveniet nemo inventore voluptatibus! Magnam eum illo facere delectus blanditiis quae tempore reprehenderit. Eos repellendus voluptatibus perferendis rem neque aspernatur necessitatibus excepturi. Sapiente alias nam, ex sed nesciunt animi error amet officia aut delectus asperiores hic perspiciatis tempore veniam ipsum omnis. Mollitia inventore a commodi placeat nulla ipsum minus sed. Accusamus dolorum ipsum deserunt laboriosam reprehenderit temporibus rerum enim, nam voluptate dolor quibusdam hic itaque dolore voluptatum quisquam minima similique nobis mollitia deleniti aperiam? Quis nulla praesentium dignissimos iste. Omnis mollitia fugiat aspernatur quasi temporibus possimus voluptate consectetur sunt a. Fugit laborum amet, illum saepe libero esse tenetur, tempora quaerat architecto obcaecati debitis facere vitae odio, iure sed harum? Error eaque eos ullam saepe commodi sunt esse, perspiciatis quam optio numquam vel voluptatem dignissimos quis, quisquam natus neque nulla consequatur officiis aut eum labore eligendi. Suscipit pariatur veritatis deserunt eaque ipsa, alias neque. Tempora commodi ea culpa, rerum mollitia magnam corporis harum reprehenderit soluta delectus debitis blanditiis! Incidunt non explicabo rem id, asperiores quas ullam similique in dolor optio quos eaque voluptas nam.
            <NavbarBottom/>
          </p>
          
      
      {/* //these are the paths on the url in the addressbar and they dictate what the user will see */}
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/AboutUsPage' component={AboutUsPage} /> 
      <Route exact path='/ContactUsPage' component={ContactUsPage} />
      <Route exact path='/DesignServicesPage' component={DesignServicesPage} />
      <Route exact path='/OrderConfirmationPage' component={OrderConfirmationPage} />
      <Route exact path='/OrderReviewPage' component={OrderReviewPage} />
      <Route exact path='/ProfilePage' component={ProfilePage} />
      <Route exact path='/ShoppingCartPage' component={ShoppingCartPage} />
      <Route exact path='/StorePage' component={StorePage} />
      <Route exact path='/users/:id' component={UserPage} />
      <Route exact path="/users/:userId/edit" component={EditUser} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/users/:userId/pikmin' component={Pikmin} />
    
      </Switch>
      </Router>
     
      </div>
    );
  }
}

export default App;
