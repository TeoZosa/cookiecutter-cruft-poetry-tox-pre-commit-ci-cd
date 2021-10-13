window.BENCHMARK_DATA = {
  "lastUpdate": 1634132505661,
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
          "id": "faf7bd6b2ec5359733b1f416509672e5af083ecd",
          "message": "Merge pull request #388 from TeoZosa/dependabot/pip/emoji-1.6.1",
          "timestamp": "2021-10-13T13:34:06Z",
          "tree_id": "987b8925866869ce08f88f559f013fa21cd2bb18"
        },
        "date": 1634132502508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 103432.1244865207,
            "unit": "iter/sec",
            "range": "stddev: 0.000017192040679396355",
            "extra": "mean: 9.668176158658719 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4980215.215394705,
            "unit": "iter/sec",
            "range": "stddev: 1.3553800572998151e-7",
            "extra": "mean: 200.7945353262764 nsec\nrounds: 57804"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 41431.584191356655,
            "unit": "iter/sec",
            "range": "stddev: 0.000042700371776753576",
            "extra": "mean: 24.136175806876757 usec\nrounds: 60976"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 109779.76015557339,
            "unit": "iter/sec",
            "range": "stddev: 0.00001250762135878168",
            "extra": "mean: 9.109147247023122 usec\nrounds: 147059"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 105964.5686832572,
            "unit": "iter/sec",
            "range": "stddev: 0.000011656362775986043",
            "extra": "mean: 9.437116693119743 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4567389.140008633,
            "unit": "iter/sec",
            "range": "stddev: 2.1714158315444965e-7",
            "extra": "mean: 218.94346405481647 nsec\nrounds: 53192"
          }
        ]
      }
    ]
  }
}