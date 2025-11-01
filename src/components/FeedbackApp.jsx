import { Component } from "react";
import Feedback from './Feedback';
import Statistics from './Statistics';
import Section from './Section';


class FeedbackApp extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

handleFeedback = (option) => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1
  }));
}


render() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    const positivePercentage = total ? Math.round((good / total) * 100) : 0;

    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={["good","neutral","bad"]} onLeaveFeedback={this.handleFeedback} />
        </Section>

        {total > 0 
          ? <Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            </Section>
          : <p>There is no feedback</p>
        }
      </div>
    );
  }
}

export default FeedbackApp;


