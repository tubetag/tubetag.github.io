var ThumbNail = React.createClass({
	getInitialState: function() {
		return null; 
	},
	handleChange:function(){
	},
	componentDidMount: function() {
	},
	render: function() {
		var imgSrc="http://img.youtube.com/vi/"+this.props.vid+"/1.jpg"; 
		return (
			<div className="row">
				<div className="col-xs-6 col-md-3">
					<a href="#" class="thumbnail">
						<img src={imgSrc} alt="180x100%" data-holder-rendered="true" ></img>
					</a>
				</div>
			</div>
		);
	}
});
function createThumbNail(div, vid){
	var divObj=document.getElementById(div); 
	React.render(
		<ThumbNail vid={vid}/>,
		divObj
	);
}
//createThumbNail("test", "R5Ty4e2UVME");
