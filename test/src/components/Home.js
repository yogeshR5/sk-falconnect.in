import React, {Component} from 'react';
import './Home.css';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import {Field, reduxForm, reset} from 'redux-form';
import {upDateForm} from '../action/SaveActions';
import peopleData from '../people_5.json';
import {required, length, numericality} from 'redux-form-validators';
import renderField from './RenderField';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoplesData: [],
      show: false,
      keyValue: '',
      openADD: false,
      checked: false,
      checkedPeople: [],
      editData: [],
      updateForm: 0,
    };
  }

  // static getDerivedStateFromProps(preProps, prevState) {
  //   if (prevState.peoplesData.length === 0) {
  //     return {
  //       peoplesData: peopleData.People,
  //     };
  //   }
  // }

  componentWillMount() {
    this.setState({peoplesData: peopleData.People});
  }

  componentDidMount() {
    var checkedPeople = this.state.checkedPeople;
    this.state.peoplesData.map((data, index) => {
      checkedPeople[index] = false;
      this.setState({checkedPeople: checkedPeople});
    });
  }

  onSubmit = e => {
    var collectData = {
      name: e.people_name,
      Description: e.people_description,
      img: e.people_img,
      rating: e.people_rating,
      Likes: [e.people_likes],
      Dislikes: [e.people_dislikes],
    };
    this.setState({
      peoplesData: [collectData, ...this.state.peoplesData],
      openADD: false,
    });
  };

  onEditForm = e => {
    var collectData = {
      name: e.people_name,
      Description: e.people_description,
      img: e.people_img,
      rating: e.people_rating,
      Likes: [e.people_likes],
      Dislikes: [e.people_dislikes],
    };
    var updatedData = this.state.peoplesData;
    updatedData[this.props.result] = collectData;
    this.setState({peoplesData: updatedData, updateForm: false});
  };

  openDetails = data => {
    this.setState({show: true, keyValue: data.name});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  openAddModal = () => {
    this.setState({openADD: !this.state.openADD});
  };

  handleInputChange = index => {
    var checkedPeople = this.state.checkedPeople;
    checkedPeople[index] =true;
    this.setState({checkedPeople: checkedPeople});
  };

  editData = () => {
    var checkedPeople = this.state.checkedPeople.filter((value, index, arr) => {
      if (value == true) {
        var editData = [];
        editData[index] = this.state.peoplesData[index];
        this.setState({editData: editData, updateForm: 1});
        editData.map((value, key) => {
          if (value != '') {
            this.props.upDateForm(value, key);
          }
        });
      }
    });
  };

  closeEditModal = () => {
    this.setState({updateForm: 0});
  };

  deleteData = () => {
    var checkedPeople = this.state.checkedPeople.filter((value, index, arr) => {
      if (value === true) {
        var peoplesData = this.state.peoplesData.splice(index, 1);
      }
    });

    this.setState({
      peoplesData: this.state.peoplesData,
      checkedPeople: checkedPeople,
    });
  };

  sortTable = () => {
    var sortedArray = this.state.peoplesData;
    sortedArray.sort(function(firstValue, secondValue) {
      var firstName = firstValue.name.toLowerCase(),
        secondName = secondValue.name.toLowerCase();
      if (firstName < secondName)
        //sort string ascending
        return -1;
      if (firstName > secondName) return 1;
      return 0; //default return value (no sorting)
    });
    this.setState({peoplesData: sortedArray});
  };

  render() {
    console.log('state.updateData.result', this.props.result);
    return (
      <div className="App">
        <div className="add_data">
          <Modal
            open={this.state.openADD}
            closeOnEsc={true}
            closeOnOverlayClick={false}
            showCloseIcon={true}
            onClose={this.openAddModal}
            little
            classNames={{modal: 'Modal-modal-0-1-3'}}
          >
            <div className="employee_pops">
              <div className="modal-wrap">
                <div className="modal-inner-wrap">
                  <span>ADD</span>
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="name_field">
                      <Field
                        name="people_name"
                        type="text"
                        id="name_field"
                        placeholder="Enter_name"
                        component={renderField}
                        validate={[required({msg: 'must enter name'})]}
                      />
                    </div>
                    <div className="name_field">
                      <Field
                        name="people_description"
                        type="text"
                        id="description_field"
                        placeholder="Enter_Description"
                        component={renderField}
                        validate={[required({msg: 'must enter descrition'})]}
                      />
                    </div>
                    <div className="name_field">
                      <Field
                        name="people_img"
                        type="text"
                        id="img_field"
                        placeholder="img"
                        component={renderField}
                      />
                    </div>
                    <div className="name_field">
                      <Field
                        name="people_rating"
                        type="number"
                        id="rating_field"
                        placeholder="rating"
                        component={renderField}
                        validate={[required({msg: 'must enter rating'})]}
                      />
                    </div>
                    <div className="name_field">
                      <Field
                        name="people_likes"
                        type="text"
                        id="like_field"
                        placeholder="Likes"
                        component={renderField}
                        validate={[required({msg: 'must enter like'})]}
                      />
                    </div>
                    <div className="name_field">
                      <Field
                        name="people_dislikes"
                        type="text"
                        id="dislike_field"
                        placeholder="Dislikes"
                        component={renderField}
                        validate={[required({msg: 'must enter dislikes'})]}
                      />
                    </div>
                    <button type="submit" className="modal_submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Modal>
        </div>

        <Modal
          open={this.state.updateForm}
          closeOnEsc={true}
          closeOnOverlayClick={false}
          showCloseIcon={true}
          onClose={this.closeEditModal}
          little
          classNames={{modal: 'Modal-modal-0-1-3'}}
        >
          <div className="employee_pops">
            <div className="modal-wrap">
              <div className="modal-inner-wrap">
                <span>updateForm</span>
                <form onSubmit={this.props.handleSubmit(this.onEditForm)}>
                  <div className="name_field">
                    <Field
                      name="people_name"
                      type="text"
                      id="name_field"
                      placeholder="Enter_name"
                      component={renderField}
                      validate={[required({msg: 'must enter name'})]}
                    />
                  </div>
                  <div className="name_field">
                    <Field
                      name="people_description"
                      type="text"
                      id="description_field"
                      placeholder="Enter_Description"
                      component={renderField}
                      validate={[required({msg: 'must enter descrition'})]}
                    />
                  </div>
                  <div className="name_field">
                    <Field
                      name="people_img"
                      type="text"
                      id="img_field"
                      placeholder="img"
                      component={renderField}
                    />
                  </div>
                  <div className="name_field">
                    <Field
                      name="people_rating"
                      type="number"
                      id="rating_field"
                      placeholder="rating"
                      component={renderField}
                      validate={[required({msg: 'must enter rating'})]}
                    />
                  </div>
                  <div className="name_field">
                    <Field
                      name="people_likes"
                      type="text"
                      id="like_field"
                      placeholder="Likes"
                      component={renderField}
                      validate={[required({msg: 'must enter like'})]}
                    />
                  </div>
                  <div className="name_field">
                    <Field
                      name="people_dislikes"
                      type="text"
                      id="dislike_field"
                      placeholder="Dislikes"
                      component={renderField}
                      validate={[required({msg: 'must enter dislikes'})]}
                    />
                  </div>
                  <button type="submit" className="modal_submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal>

        <div>
          <table id="employee_details">
            <tr>
              <>
                <th>
                  <button onClick={this.sortTable}>Sort</button>Name
                </th>
                <th>Image</th>
                <th>Description</th>
                <th>Ratings</th>
                <th>Likes</th>
                <th>Dis-Likes</th>
              </>
            </tr>

            {this.state.peoplesData.map((data, index) => (
              <tr>
                <td>
                  <input
                    name={data.name}
                    type="checkbox"
                    checked={this.state.checkedPeople[index]}
                    onChange={() => this.handleInputChange(index)}
                  />
                  {data.name}
                </td>
                <td>
                  <img style={{width: '40px'}} src={data.img} />
                </td>
                <td>{data.Description}</td>
                <td>{data.rating}</td>
                {data.Likes.map((value, index) => (
                  <td>{value}</td>
                ))}
                {data.Dislikes.map((data, key) => (
                  <td>{data}</td>
                ))}
              </tr>
            ))}
          </table>
          <div className="container">
            <div className="row button_view">
              <div className="add_button">
                <button onClick={() => this.openAddModal()}>ADD</button>
              </div>
              <div className="delete_button">
                <button onClick={() => this.deleteData()}>Remove</button>
              </div>
              <div className="edit_button">
                <button onClick={() => this.editData()}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home = reduxForm({
  form: 'home',
})(Home);

const mapStateToProps = (state, ownProps) => {
  return {
    result: state.updateData.result,
    initialValues: {
      people_name: state.updateData.result,
      people_img: 'http://www.fillmurray.com/200/200',
    },
  };
};
const mapDispatchToProps = {upDateForm};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
