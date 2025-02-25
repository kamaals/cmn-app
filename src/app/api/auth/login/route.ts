import {NextRequest, NextResponse} from "next/server";
import {PLAYERS} from "@/lib/mock/players";
import {PlayerUsernameType} from "@/lib/types";
import {StatusCodes} from "http-status-codes";

export async function POST(request: NextRequest){
    const {username, password} = await request.json() as {username: PlayerUsernameType, password: string}

    if (username in PLAYERS && PLAYERS[username].password === password) {
        const player = PLAYERS[username]
        const response = NextResponse.json({player, status: "success"}, {status: StatusCodes.OK})
        response.cookies.set('user', JSON.stringify(player), {httpOnly: true, secure: true, sameSite: 'lax'})
        return response
    }else {
        return NextResponse.json({error: 'player does not exist or wrong password'}, {status: StatusCodes.FORBIDDEN})
    }
}

