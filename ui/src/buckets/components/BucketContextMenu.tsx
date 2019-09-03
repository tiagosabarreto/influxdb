// Libraries
import React, {PureComponent} from 'react'

// Components
import {Context, Alignment, ComponentSize} from 'src/clockface'

import {
  ButtonShape,
  ComponentColor,
  IconFont,
  FlexBox,
  AlignItems,
  FlexDirection,
} from '@influxdata/clockface'

// Types
import {PrettyBucket} from 'src/buckets/components/BucketCard'

interface Props {
  bucket: PrettyBucket
  onDeleteBucket: (bucket: PrettyBucket) => void
}

export default class BucketContextMenu extends PureComponent<Props> {
  public render() {
    const {bucket, onDeleteBucket} = this.props

    return (
      <>
        <Context align={Alignment.Center}>
          <FlexBox
            alignItems={AlignItems.Center}
            direction={FlexDirection.Row}
            margin={ComponentSize.Small}
          >
            <Context.Menu
              icon={IconFont.Trash}
              color={ComponentColor.Danger}
              shape={ButtonShape.Default}
              text="Delete Bucket"
              testID="context-delete-menu"
            >
              <Context.Item
                label="Confirm"
                action={onDeleteBucket}
                value={bucket}
                testID="context-delete-task"
              />
            </Context.Menu>
          </FlexBox>
        </Context>
      </>
    )
  }
}