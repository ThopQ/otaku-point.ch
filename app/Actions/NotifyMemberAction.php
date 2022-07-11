<?php

namespace App\Actions;

use App\Models\Member;
use Illuminate\Support\Facades\Mail;
use App\Mail\MemberRegistered;

class NotifyMemberAction
{

    private $member;

    public function __construct(Member $member)
    {
        $this->member = $member;
    }


    public function email()
    {
        Mail::to($this->member->email)->send(new MemberRegistered);
    }
}
