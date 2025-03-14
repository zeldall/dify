import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  RiChatSettingsLine,
} from '@remixicon/react'
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@/app/components/base/portal-to-follow-elem'
import ActionButton, { ActionButtonState } from '@/app/components/base/action-button'
import { Message3Fill } from '@/app/components/base/icons/src/public/other'
import InputsFormContent from '@/app/components/base/chat/embedded-chatbot/inputs-form/content'
import cn from '@/utils/classnames'

type Props = {
  iconColor?: string
}
const ViewFormDropdown = ({ iconColor }: Props) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement='bottom-end'
      offset={{
        mainAxis: 4,
        crossAxis: 4,
      }}
    >
      <PortalToFollowElemTrigger
        onClick={() => setOpen(v => !v)}
      >
        <ActionButton size='l' state={open ? ActionButtonState.Hover : ActionButtonState.Default}>
          <RiChatSettingsLine className={cn('w-[18px] h-[18px]', iconColor)} />
        </ActionButton>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-50">
        <div className='w-[400px] bg-components-panel-bg backdrop-blur-sm rounded-2xl border-[0.5px] border-components-panel-border shadow-lg'>
          <div className='flex items-center gap-3 px-6 py-4 rounded-t-2xl border-b border-divider-subtle'>
            <Message3Fill className='shrink-0 w-6 h-6' />
            <div className='grow text-text-secondary system-xl-semibold'>{t('share.chat.chatSettingsTitle')}</div>
          </div>
          <div className='p-6'>
            <InputsFormContent showTip />
          </div>
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>

  )
}

export default ViewFormDropdown
