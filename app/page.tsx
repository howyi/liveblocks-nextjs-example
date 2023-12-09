import {LiveBlocksWrapper} from "@/app/LiveBlocksWrapper";
import {CursorSyncWrapper} from "@/app/CursorSyncWrapper";

export default function Home() {
  return (
    <main>
      <LiveBlocksWrapper>
          <CursorSyncWrapper>
              <></>
          </CursorSyncWrapper>
      </LiveBlocksWrapper>
    </main>
  )
}
