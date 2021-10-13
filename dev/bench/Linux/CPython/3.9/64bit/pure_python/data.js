window.BENCHMARK_DATA = {
  "lastUpdate": 1634132519252,
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
        "date": 1634132516341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 106586.06856551766,
            "unit": "iter/sec",
            "range": "stddev: 0.000004898583699358852",
            "extra": "mean: 9.38208917411479 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5022847.278242321,
            "unit": "iter/sec",
            "range": "stddev: 4.610944079276275e-9",
            "extra": "mean: 199.09026586006974 nsec\nrounds: 50252"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 51062.412431505116,
            "unit": "iter/sec",
            "range": "stddev: 0.000009316309607256232",
            "extra": "mean: 19.583876914186053 usec\nrounds: 81301"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130307.31069187688,
            "unit": "iter/sec",
            "range": "stddev: 3.4883089760099757e-7",
            "extra": "mean: 7.674166512150559 usec\nrounds: 136987"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 106022.86576900046,
            "unit": "iter/sec",
            "range": "stddev: 0.000004950102758304459",
            "extra": "mean: 9.4319276577448 usec\nrounds: 88496"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5016498.680191777,
            "unit": "iter/sec",
            "range": "stddev: 4.48139890142734e-9",
            "extra": "mean: 199.34222328182395 nsec\nrounds: 54532"
          }
        ]
      }
    ]
  }
}