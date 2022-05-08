import styled from '@/styled/index'
import 'lazysizes'
import { useEffect, useState } from 'react'
import ArrowRight from '../Icons/ArrowRight'
import CrossIcon from '../Icons/CrossIcon'
import BaseModal from './BaseModal'

const Container = styled.div`
  position: relative;
  background: #000;
`
const Heading = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-areas: '. title exit';
  align-items: center;
  justify-items: center;
  padding: 8px 0;
`
const Title = styled.h2`
  color: white;
  font-size: 1.6rem;
  grid-area: title;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
  max-height: calc(80vh - 46px);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  &.lazyload {
    opacity: 0;
  }

  &.lazyloading {
    opacity: 1;
    transition: opacity 300ms;
    background: url('/assets/images/loader.gif') no-repeat center;
  }
`
const ArrowContainer = styled.div`
  position: absolute;
  height: calc(100% - 46px);
  width: 100%;
  top: 46px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Arrow = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  height: 100%;
  width: 60px;
  background: black;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    opacity: 1;
  }
`

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  handlePrevious: () => void
  handleNext: () => void
  selectedDisplay: { url: string; alt: string; index: number }
}

const DisplayModal = ({
  isOpen,
  onRequestClose,
  selectedDisplay,
  handlePrevious,
  handleNext,
}: ModalProps) => {
  const [innerOpen, setInnerOpen] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const imageTraversalEvent = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowRight':
          handleNext()
          break
        case 'ArrowLeft':
          handlePrevious()
          break
        default:
          break
      }
    }

    if (selectedDisplay)
      document.addEventListener('keyup', imageTraversalEvent)

    return () => {
      document.removeEventListener('keyup', imageTraversalEvent)
    }
  }, [selectedDisplay, handlePrevious, handleNext])

  useEffect(() => {
    if (isOpen) {
      setOffset(window.scrollY)
    }
    setInnerOpen(isOpen)
  }, [isOpen])

  return (
    <BaseModal
      maxWidth={'90vw'}
      isOpen={innerOpen}
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
      onRequestClose={onRequestClose}
      onAfterOpen={() => {
        document.body.style.overflow = 'hidden'
        document.getElementById('__next').style.position = 'relative'
        document.getElementById('__next').style.top = `-${offset}px`
      }}
      onAfterClose={() => {
        document.body.style.overflow = ''
        document.getElementById('__next').style.position = ''
        document.getElementById('__next').style.top = ''
        window.scrollTo(0, offset)
      }}
    >
      <Container>
        <Heading>
          <Title>{selectedDisplay?.alt}</Title>
          <CrossIcon
            style={{
              height: '1.6rem',
              fill: '#fff',
              cursor: 'pointer',
              gridArea: 'exit',
            }}
            onClick={onRequestClose}
          />
        </Heading>

        <ImageContainer key={selectedDisplay?.url}>
          <Image
            data-src={selectedDisplay?.url}
            alt={selectedDisplay?.alt}
            className={'lazyload'}
          />
        </ImageContainer>

        <ArrowContainer>
          <Arrow onClick={handlePrevious}>
            <ArrowRight
              style={{
                fill: '#fff',
                transform: 'rotate(-180deg)',
              }}
            />
          </Arrow>
          <Arrow onClick={handleNext}>
            <ArrowRight
              style={{
                fill: '#fff',
              }}
            />
          </Arrow>
        </ArrowContainer>
      </Container>
    </BaseModal>
  )
}

export default DisplayModal
