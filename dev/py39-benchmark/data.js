window.BENCHMARK_DATA = {
  "lastUpdate": 1627651548499,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "39b99ff766e3f522bc343021b86405327a3ac658",
          "message": "Merge pull request #260 from TeoZosa/dependabot/pip/emoji-1.4.2",
          "timestamp": "2021-07-30T13:17:47Z",
          "tree_id": "07cd4fe2b84bcf1dc03c2ff91ce409b87f7a0367"
        },
        "date": 1627651546224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14562.495952980827,
            "unit": "iter/sec",
            "range": "stddev: 0.00002795135571249387",
            "extra": "mean: 68.66954698073636 usec\nrounds: 4289"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3671861.235245623,
            "unit": "iter/sec",
            "range": "stddev: 9.65819020888462e-7",
            "extra": "mean: 272.3414464575443 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11377.363569162959,
            "unit": "iter/sec",
            "range": "stddev: 0.00007996875245111577",
            "extra": "mean: 87.89382477944059 usec\nrounds: 7950"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 110391.44207839857,
            "unit": "iter/sec",
            "range": "stddev: 0.00002491517222836474",
            "extra": "mean: 9.058673219340797 usec\nrounds: 41153"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14532.34288619108,
            "unit": "iter/sec",
            "range": "stddev: 0.00004767170725364839",
            "extra": "mean: 68.81202899156887 usec\nrounds: 7485"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3738266.8205745406,
            "unit": "iter/sec",
            "range": "stddev: 4.0106892288908706e-7",
            "extra": "mean: 267.5036448699262 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}