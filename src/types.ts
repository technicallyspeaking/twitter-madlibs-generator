import { PartOfSpeech } from 'pos'

export type UnfilledMadLib = (MadLibTextBlock | MadLibUnfilledSpace)[]
export type FilledMadLib = (MadLibTextBlock | MadLibFilledSpace)[]
export type MadLibPartType = 'unfilled' | 'filled' | 'text'

export type MadLibTextBlock = {
    posInfo: PartOfSpeechInfo,
    text: string,
    type: 'text'
}

export type MadLibUnfilledSpace = {
    posInfo: PartOfSpeechInfo,
    originalWord:string,
    type: 'unfilled'
}

export type MadLibFilledSpace = {
    partOfSpeech: PartOfSpeechInfo
    text: string,
    originalWord:string
    type: 'filled'
}

export interface PartOfSpeechInfo {
    pos: PartOfSpeech
    description: string
    example: string
}

export type PartOfSpeechInfoMap = Map<PartOfSpeechInfo>

export interface Map<V> {
    [k:string]:V
}
