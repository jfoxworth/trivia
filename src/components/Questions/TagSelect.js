
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


class TagSelect extends React.Component {

    constructor(props) {
        super(props);
		}

    handleChange =(selectedOptions) =>{
      if (selectedOptions[0])
      {
        if (selectedOptions[0]=='')
        {
          this.props.changeProps({...this.props.showProps, tag:'All'});
        }else
        {
          this.props.changeProps({...this.props.showProps, tag:selectedOptions[0]['tagName']});
        }
      }
    }

		render(){

      return (

				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={4}>
						<div className="lead">Select Tag</div>
					</Col>

					<Col sm={8} className="center-me">
            {this.props.tags && 
              <Form.Group>
                <Typeahead
                  id="tagValue"
                  labelKey="tagName"
                  options={this.props.tags}
                  placeholder="Choose a tag to see list ..."
                  onChange={this.handleChange}
                />
              </Form.Group>}
					</Col>
				</Row>

			) 
		}
}



export default connect(null, null)(TagSelect);
