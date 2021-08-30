window.BENCHMARK_DATA = {
  "lastUpdate": 1630350351324,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "fc9a9ae7952becea70dddec4e492808431707178",
          "message": "Merge pull request #309 from TeoZosa/dependabot/pip/black-21.8b0\n\n⬆️ Bump black from 21.7b0 to 21.8b0",
          "timestamp": "2021-08-30T18:58:08Z",
          "tree_id": "267d470824e5dd28e3df8628b69a806439cb8abb"
        },
        "date": 1630350349194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14821.2124191162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004344392782490929",
            "extra": "mean: 67.47086349765918 usec\nrounds: 9824"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4353787.933548522,
            "unit": "iter/sec",
            "range": "stddev: 4.364438245954469e-7",
            "extra": "mean: 229.685050182216 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12198.636443581445,
            "unit": "iter/sec",
            "range": "stddev: 0.00007587846616991348",
            "extra": "mean: 81.97637536170446 usec\nrounds: 5869"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 113449.90407686151,
            "unit": "iter/sec",
            "range": "stddev: 0.00001390320184406397",
            "extra": "mean: 8.81446316007907 usec\nrounds: 27701"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14915.639252059753,
            "unit": "iter/sec",
            "range": "stddev: 0.00006768674780369028",
            "extra": "mean: 67.04372391293296 usec\nrounds: 8577"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4127334.6731128474,
            "unit": "iter/sec",
            "range": "stddev: 4.12122439061068e-7",
            "extra": "mean: 242.2871124346038 nsec\nrounds: 50506"
          }
        ]
      }
    ]
  }
}