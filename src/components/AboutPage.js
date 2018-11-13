import React, { Component } from 'react';


class AboutPage extends Component {

  render() {
    return (
      <div className="about-container">
        <div className='about-header'>
          <h1>About the Medici</h1>
        </div>
        <img className="main-image" src="https://media.davidrumsey.com/rumsey/Size4/D5005/1202038.jpg"></img>
        <div className="about-paragaph">
          <p>
          The House of Medici was an Italian banking family and political dynasty that first began to gather prominence under Cosimo de' Medici in the Republic of Florence during the first half of the 15th century. The family originated in the Mugello region of Tuscany and prospered gradually until it was able to fund the Medici Bank. This bank was the largest in Europe during the 15th century, and it facilitated the Medicis' rise to political power in Florence, although they officially remained citizens rather than monarchs until the 16th century.
          <br></br><br></br>
          The Medici produced three Popes of the Catholic Church—Pope Leo X (1513–1521), Pope Clement VII (1523–1534), and Pope Leo XI (1605)[3]—and two queens regent of France—Catherine de' Medici (1547–1559) and Marie de' Medici (1600–1610). In 1532, the family acquired the hereditary title Duke of Florence. In 1569, the duchy was elevated to the Grand Duchy of Tuscany after territorial expansion. The Medicis ruled the Grand Duchy from its inception until 1737, with the death of Gian Gastone de' Medici. The grand duchy witnessed degrees of economic growth under the early grand dukes but was bankrupt by the time of Cosimo III de' Medici (r. 1670-1723).
          <br></br><br></br>
          The Medicis' wealth and influence was initially derived from the textile trade guided by the wool guild of Florence, the Arte della Lana. Like other families ruling in Italian signorie, the Medicis dominated their city's government, were able to bring Florence under their family's power, and created an environment in which art and humanism flourished. They and other families of Italy inspired the Italian Renaissance, such as the Visconti and Sforza in Milan, the Este in Ferrara, and the Gonzaga in Mantua.
          <br></br><br></br>
          The Medici Bank, from when it was created in 1397 to its fall in 1494, was one of the most prosperous and respected institutions in Europe, and the Medici family was considered the wealthiest in Europe for a time. From this base, they acquired political power initially in Florence and later in wider Italy and Europe. They were among the earliest businesses to use the general ledger system of accounting through the development of the double-entry bookkeeping system for tracking credits and debits.
          </p>
        </div>
      </div>
    );
  }

}

export default AboutPage;
