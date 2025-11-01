const Feedback = ({options, onLeaveFeedback}) => {
    return(
    <ul>
{options.map(option => (
  <button key={option} onClick={() => onLeaveFeedback(option)}>
    {option}
  </button>
))}
</ul>
)
}

export default Feedback;
