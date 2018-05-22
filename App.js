import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './font.css';
import Fade from 'react-reveal/Fade';




class App extends Component {

  render() {
    return (
      <div className="App">
        <Fade>
        <div id="intro-header">
          <h1>Let's design good things together.</h1>
          <p>
            Scroll for a bit of my work, and to see if I could be a good fit for your team.
          </p>
        </div>
        </Fade>

        <Fade bottom>
        <div id="block-header">
          <h4> 01 </h4>
          <h2> I've designed products for people around the world.</h2>
        </div>
        </Fade>

        <div class="container">
          <div id="project" class="width">
            <h3>TransferWise</h3>
            <h4> 2016-2018</h4>
            <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.</p>
            <h4><a href="#">Check it out </a></h4>
          </div>
        </div>

        <div class="container">
          <div class="item first t-medium">
          </div>
          <div class="item">
          </div>
        </div>

        <Fade>
        <div class="container">
          <div class="item full">
          </div>
        </div>
      </Fade>
        <div class="container">
            <div class="item first"></div>
            <div class="container-column">
              <div id="project">
                <h3>Google</h3>
                <h4> 2014-2016</h4>
                <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.</p>
                <h4><a href="#">Check it out </a></h4>
              </div>
              <div class="item"></div>
          </div>
        </div>

      <Fade bottom cascade>
        <div id="block-header">
          <h4>02</h4>
          <h2>I've learned from smart people, and great teams.</h2>
        </div>
      </Fade>

        <div class="item full"></div>
        <div class="container">
          <div id="project" class="first">
            <h3>Facebook</h3>
            <h4> 2014-2016</h4>
            <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.</p>
            <h4><a href="#">Check it out </a></h4>
          </div>
          <div id="project">
            <h3>Etsy</h3>
            <h4> 2014-2016</h4>
            <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.</p>
            <h4><a href="#">Check it out </a></h4>
          </div>
        </div>
        <div class="item full">
        </div>

        <div id="block-header">
          <h4>03</h4>
          <h2>Passionate about designing with and for those who need it most.</h2>
        </div>
        <div class="container">
            <div class="item first"></div>
            <div class="container-column">
              <div id="project" class="t-small">
                <h3>Co-creation in Colombia</h3>
                <h4> 2014-2016</h4>
                <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.</p>
                <h4><a href="#">Check it out </a></h4>
              </div>
              <div class="item"></div>
          </div>
        </div>
        <div class="container">
          <div id="project" class="first t-medium">
            <h3>Hosting refugees</h3>
            <h4> 2014-2016</h4>
            <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.</p>
            <h4><a href="#">Check it out </a></h4>
          </div>
          <div class="item"></div>
        </div>
        <div class="item full"></div>


      <div id="block-header">
        <h4>04</h4>
        <h2>Forever learning to code, mostly for fun.</h2>
      </div>
      <div class="container">
          <div class="item first"></div>
          <div class="container-column">
            <div id="project">
              <h3>Hack night</h3>
              <h4> 2014-2016</h4>
              <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.</p>
              <h4><a href="#">Check it out </a></h4>
            </div>
            <div class="item"></div>
        </div>
      </div>

      <div id="block-header">
        <h4>05</h4>
        <h2>Sound like a potential fit?</h2>
        <p> As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot.As part of the conversion team, I've focused on a lotta stuff. Mostly things like this and this other thing but it's hard to asay, i've done a lot</p>
        <h4><a href="#">Email me</a></h4>
      </div>

      <div id="footer"></div>
</div>
    );
  }

}

export default App;
