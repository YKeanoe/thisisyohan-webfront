import Modal, { Styles, Props as ReactModalProps } from 'react-modal'

const modalStyles = (maxWidth: string | number): Styles => ({
  content: {
    width: '100%',
    maxWidth: maxWidth,
    maxHeight: '80vh',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    outline: 'none',
    display: 'grid',
    gridTemplateColumns: '100%',
    alignItems: 'center',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

Modal.setAppElement('#__next')

// override React Modal's default global styles
Modal.defaultStyles.content = {
  position: 'static',
  padding: 0,
}

const BaseModal = (props: ReactModalProps & { maxWidth: string }) => {
  const { maxWidth } = props

  return (
    <Modal style={modalStyles(maxWidth)} {...props}>
      {props.children}
    </Modal>
  )
}

export default BaseModal
