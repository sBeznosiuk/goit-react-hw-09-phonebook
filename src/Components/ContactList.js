import React, { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, fetchContacts } from '../redux/contacts/operations';
import Loader from 'react-loader-spinner';
import {
  getLoading,
  getContacts,
  getFilter,
} from '../redux/contacts/contacts-selectors';
import { StyledList } from './styles';

const ContactList = () => {
  useEffect(() => {
    onLoadingFetchContacts();
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
  const onRemoveContact = e => dispatch(removeContact(e.target.id));
  const onLoadingFetchContacts = () => dispatch(fetchContacts());

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  const renderItems = () => {
    if (filter) {
      return contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filter) && (
            <ContactListItem
              onClickRemove={onRemoveContact}
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ),
      );
    } else {
      return contacts.map(contact => (
        <ContactListItem
          onClickRemove={onRemoveContact}
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ));
    }
  };
  return (
    <>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <StyledList>{renderItems()}</StyledList>
    </>
  );
};

export default ContactList;

// const mapStateToProps = state => ({
//   contacts: getContacts(state),
//   filter: getFilter(state),
//   isLoading: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onRemoveContact: e => dispatch(removeContact(e.target.id)),
//   onLoadingFetchContacts: () => dispatch(fetchContacts()),
// });

// class ContactList extends Component {
//   componentDidMount() {
//     this.props.onLoadingFetchContacts();
//   }

//   render() {
//     const renderItems = () => {
//       if (this.props.filter) {
//         return this.props.contacts.map(
//           contact =>
//             contact.name.toLowerCase().includes(this.props.filter) && (
//               <ContactListItem
//                 onClickRemove={this.props.onRemoveContact}
//                 key={contact.id}
//                 id={contact.id}
//                 name={contact.name}
//                 number={contact.number}
//               />
//             ),
//         );
//       } else {
//         return this.props.contacts.map(contact => (
//           <ContactListItem
//             onClickRemove={this.props.onRemoveContact}
//             key={contact.id}
//             id={contact.id}
//             name={contact.name}
//             number={contact.number}
//           />
//         ));
//       }
//     };
//     return (
//       <>
//         {this.props.isLoading && (
//           <Loader
//             type="ThreeDots"
//             color="#00BFFF"
//             height={100}
//             width={100}
//             timeout={3000} //3 secs
//           />
//         )}
//         <StyledList>{renderItems()}</StyledList>
//       </>
//     );
//   }
// }
