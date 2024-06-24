function RenderEventContent(eventInfo) {
  const puntoColorStyle = {
    backgroundColor: eventInfo.event.backgroundColor,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "5px",
  };

  return (
    <>
      <div className="pl-2 text-white">
        <span style={puntoColorStyle}></span>
        <span className="text-wrap">{eventInfo.event.title}</span>
      </div>
    </>
  );
}

export default RenderEventContent;
