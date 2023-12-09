import {LiveBlocksWrapper} from "@/app/LiveBlocksWrapper";
import {CursorSyncWrapper} from "@/app/CursorSyncWrapper";
import {Editor} from "@/app/Editor";

export default function Home() {
  return (
    <main>
      <LiveBlocksWrapper>
          <CursorSyncWrapper>
              <Editor />
          </CursorSyncWrapper>
      </LiveBlocksWrapper>
    </main>
  )
}
